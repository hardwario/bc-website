<a href="https://www.bigclown.com"><img src="https://s3.eu-central-1.amazonaws.com/bigclown/gh-readme-logo.png" alt="BigClown Logo" align="right"></a>

# BigClown Website

This repository contains these parts of BigClown website:

* https://www.bigclown.com/
* https://www.bigclown.cz/
* https://doc.bigclown.com/
* https://doc.bigclown.cz/
* https://blog.bigclown.com/
* https://blog.bigclown.cz/

# Deployment

The website automatically deploys with commit to master branch. It is built and served using [Netlify](https://www.netlify.com/) CDN service.

# Technology

The website uses the following core technologies:

* [Hugo](https://gohugo.io/) - static site generator
* [npm](https://www.npmjs.com/) - package manager for Node.js
* [gulp](https://gulpjs.com/) - automation toolkit

# Development setup on macOS

1. Open Terminal.
2. Install [Homebrew](https://brew.sh/).
3. Update & upgrade Homebrew packages:
    `brew update && brew upgrade`
4. Install Git:
    `brew install git`
5. Install Hugo:
    `brew install hugo`
6. Install npm
    `brew install node`
7. Clone this repository:
    `git clone git@github.com:bigclownlabs/bc-website.git`
8. Navigate to project directory:
    `cd bc-website`
9. Install all dependencies:
    `npm install`
10. Run local webserver:
    `npm start`
11. Open browser and navigate to http://localhost:1313/.

# License

This project is licensed under the [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/) - see the [LICENSE](LICENSE) file for details.

---

Made with &#x2764;&nbsp; by [BigClown Labs s.r.o.](https://www.bigclown.com) in Czech Republic.
