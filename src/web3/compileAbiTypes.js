const path = require('path');
const fs = require('fs');
const { readdir } = require('fs').promises;
const { spawnSync } = require('child_process');

async function listFiles(dir) {
    const dirs = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirs.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? listFiles(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

const generatorPath = path.join(process.cwd(), 'node_modules/.bin/abi-types-generator');
const abiPath = path.join(__dirname, 'abi');
const outputPath = path.join(__dirname, 'types');

listFiles(abiPath).then((list) => {
    for (const file of list) {
        const subPath = path.dirname(path.relative(abiPath, file));
        const subOutputPath = path.join(outputPath, subPath);
        const abiBasename = path.basename(file, '.json');
        fs.mkdirSync(subOutputPath, { recursive: true });
        spawnSync(generatorPath, [file, `--output=${subOutputPath}`, '--provider=web3']);

        const typeFilePath = path.join(subOutputPath, `${abiBasename}.ts`);
        const content = fs.readFileSync(typeFilePath);
        // custom your fix here
        const FIX_PATTEN = [
            ['export type ContractContext', `export type ${abiBasename}Contract`],
            ['multicall(data: string | number[][]): MethodPayableReturnContext;', 'multicall(data: string[] | number[]): MethodPayableReturnContext & MethodConstantReturnContext<string[]>;']
        ];
        let fixContent = content.toString();
        for (const patten of FIX_PATTEN) {
            fixContent = fixContent.replace(patten[0], patten[1]);
        }
        fs.writeFileSync(typeFilePath, fixContent, 'utf8')
    }
});
