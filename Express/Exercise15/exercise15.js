const fs = require('fs').promises;
const path = require('path');

let files=['D:/Projects and Work/WebDev/Express/Exercise15/aryan.txt','D:/Projects and Work/WebDev/Express/Exercise15/ravi.txt','D:/Projects and Work/WebDev/Express/Exercise15/harry.txt','D:/Projects and Work/WebDev/Express/Exercise15/lase.md','D:/Projects and Work/WebDev/Express/Exercise15/first.py','D:/Projects and Work/WebDev/Express/Exercise15/second.py','D:/Projects and Work/WebDev/Express/Exercise15/three.py','D:/Projects and Work/WebDev/Express/Exercise15/rajjeev.md','D:/Projects and Work/WebDev/Express/Exercise15/ramesh.md'
]



async function movefiletodir(files){
    for (const file of files){
        const extension = path.extname(file);
        const targetDir = ('Exercise'+extension).trim()
        const filename = path.basename(file)
        const targetfile = path.join(targetDir,filename)

        try{
            await fs.access(file)

            await fs.mkdir(targetDir,{recursive:true})

            await fs.rename(file,targetfile)

            console.log(`${file} moved to directory ${targetDir}`)
        }
        catch(err){
            console.log('failed')
            console.log(err)
        }
    }
}

movefiletodir(files)