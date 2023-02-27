const { getFileList } = require('./getFileList')
const { countStrings } = require('./countStrings')

const count = () => {
  getFileList('/home/ANDRE.COSTA/work/relationship-frontend/').then((files) => {
    files.forEach(file => {
      console.log(`${file}: ${countStrings(file)} strings(s)`)
    });
  });
}

count()
