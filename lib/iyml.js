'use strict'
const fs = require('fs');
const path = require('path');

class IYml {
    constructor() {
        this.path = null;
    }

    run(file, dest){
        this.path = path.dirname(file);
        let content = this.read(file);
        fs.writeFile(dest, content, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }

    read(file){
        let data = fs.readFileSync(file, 'utf-8');
        let list = data.split("\n");
        for(let li in list){
            let match =/^include:\s(.*?)$/g.exec(list[li]);
            if (match){
                console.log(file, '<==', this.path + '/' + match[1]);
                data = data.replace(match[0], this.read(this.path + '/' + match[1]));
            }
        }
        return data;
    }
}

module.exports = IYml;