const Generator = require("yeoman-generator");
module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        default: "my-react-site",
      },
    ]);
  }

  writing() {
    const { projectName } = this.answers;
    this.destinationRoot(this.destinationPath(projectName));
    this.fs.copyTpl(this.templatePath("**/*"), this.destinationPath(), {
      projectName,
    });
  }

  install() {
    this.spawnCommandSync("npm", ["install"]);
  }
};
