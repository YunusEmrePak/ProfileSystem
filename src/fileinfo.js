class FileInfo {
    constructor(fileList) {
        this.fileList = fileList;
        this.index = 0;
    }

    getInfo = () => {
        return this.fileList[this.index];
    }

    next = () => {
        if (this.index + 1 != this.fileList.length) {
            this.index++;
        }
    }

    prev = () => {
        if(this.index != 0) {
            this.index--;
        }
        else {
            this.index = this.fileList.length - 1;
        }
    }

    control = () => {
        return this.fileList.length;
    }


}