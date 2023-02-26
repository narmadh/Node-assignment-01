const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	
      
    
    fs.writeFile(fileName, fileContent, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
	})
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, (err, data) => {
		if (err) throw err;
	 
		console.log(data.toString());
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err)
		{
			console.log(err)
		}
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }