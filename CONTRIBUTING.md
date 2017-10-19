# Contributing

One of our goals is to provide well written documentation which allows people to learn quickly and get their projects ready fast. We warmly welcome every contribution.


## Contribution process
We stick to commonly used contribution process. To add or edit any page, please do following:

  - fork this repository
  - clone forked repository -> make changes -> commit & push
  - send a pull request with appropriate description of your changes

If you are not sure how can you help or should you have any other question, please open a new [Issue](https://github.com/bigclownlabs/bc-website/issues).


## Local development on macOS

1. Open Terminal.

2. Install [Homebrew](https://brew.sh/).

3. Update & upgrade Homebrew packages:

    `brew update && brew upgrade`

4. Install Git:

    `brew install git`

5. Install Hugo:

    `brew install hugo`

6. Install Node.js (for npm):

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

## Local development on Ubuntu

1. Open Terminal.

2. Update & upgrade your system:

    `sudo apt update && sudo apt upgrade`

3. Install Git:

    `sudo apt install git`

4. Install Hugo:

    `wget https://github.com/gohugoio/hugo/releases/download/v0.26/hugo_0.26_Linux-64bit.deb`

    `sudo dpkg -i hugo_0.26_Linux-64bit.deb`

    `rm hugo_0.26_Linux-64bit.deb`

5. Install Node.js (for npm):

    `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`

    `sudo apt install nodejs`

6. Clone this repository:

    `git clone git@github.com:bigclownlabs/bc-website.git`

7. Navigate to project directory:

    `cd bc-website`

8. Install all dependencies:

    `npm install`

9. Run local webserver:

    `npm start`

10. Open browser and navigate to http://localhost:1313/.


## Local development on Microsoft Windows

1. Install [Chocolatey](https://chocolatey.org/install) package manager for Windows.

2. Open [administrative shell](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/) `cmd.exe`.

3. Install Git:

    `choco install git`

4. Install Hugo:

    `choco install hugo`

5. Install Node.js (for npm):

    `choco install nodejs`

6. Open `cmd.exe` (without administrative rights) in your user profile directory (or directory where you like to clone repository).

7. Clone this repository:

    `git clone git@github.com:bigclownlabs/bc-website.git`

8. Navigate to project directory:

    `cd bc-website`

9. Install all dependencies:

    `npm install`

10. Run local webserver:

    `npm start`

11. Open browser and navigate to http://localhost:1313/.
