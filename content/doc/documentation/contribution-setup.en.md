---
title: "Contribution Setup"
---

We stick to commonly used contribution process. To add or edit any page, please do following:

1. Fork the [**bc-website**](https://github.com/bigclownlabs/bc-website) repository.

2. Clone the forked repository.

3. Make the desired changes.

4. Commit and push the repository.

5. Create a pull request with the appropriate description of your changes.

If you are not sure how can you help or should you have any other question, please open a new ticket on [**GitHub Issues**](https://github.com/bigclownlabs/bc-website/issues).

## Development on Windows

1. Install the [**Chocolatey**](https://chocolatey.org/install) package manager for Windows.

2. Open the [**Command Prompt**](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/) (`cmd.exe`).

3. Install **Git**:

        choco install git

4. Install **Hugo**:

        choco install hugo

5. Install **Node.js** (for npm):

        choco install nodejs

6. Open `cmd.exe` (without administrative rights) in your user profile directory (or directory where you want to clone the repository).

7. Clone this repository:

        git clone git@github.com:bigclownlabs/bc-website.git

8. Navigate to the project directory:

        cd bc-website

9. Install all dependencies:

        npm install

10. Run the local web server:

        npm start

11. Open the web browser and navigate to:

    **http://localhost:1313/**

## Development on macOS

1. Open the **Terminal** application.

2. Install [**Homebrew**](https://brew.sh/).

3. Update & upgrade Homebrew packages:

        brew update && brew upgrade

4. Install **Git**:

        brew install git

5. Install **Hugo**:

        brew install hugo

6. Install **Node.js** (for npm):

        brew install node

7. Clone this repository:

        git clone git@github.com:bigclownlabs/bc-website.git

8. Navigate to the project directory:

        cd bc-website

9. Install all dependencies:

        npm install

10. Run the local web server:

        npm start

11. Open the web browser and navigate to:

    **http://localhost:1313/**

## Development on Ubuntu

1. Open the **Terminal** application.

2. Update & upgrade your system:

        sudo apt update && sudo apt upgrade

3. Install **Git**:

        sudo apt install git

4. Install **Hugo**:

        wget https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.deb

        sudo dpkg -i hugo_0.30.2_Linux-64bit.deb

        rm hugo_0.30.2_Linux-64bit.deb

5. Install **Node.js** (for npm):

        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

        sudo apt install nodejs

6. Clone this repository:

        git clone git@github.com:bigclownlabs/bc-website.git

7. Navigate to the project directory:

        cd bc-website

8. Install all dependencies:

        npm install

9. Run the local web server:

        npm start

10. Open the web browser and navigate to:

    **http://localhost:1313/**

## Related Documents

* [**Content Contribution**]({{< relref "doc/documentation/content-contribution.en.md" >}})
