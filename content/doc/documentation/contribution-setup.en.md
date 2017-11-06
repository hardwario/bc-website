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

1. Start PowerShell ([5 Ways to Open Windows PowerShell in Windows 10](https://www.isunshare.com/windows-10/5-ways-to-open-windows-powershell-in-windows-10.html)):

    * Start `cmd.exe` command prompt and then `powershell` or

    * Start `Windows PowerShell` directly (e.g. Win-x i shortcut)

2. Install the [**Scoop**](http://scoop.sh/) a command-line installer for Windows. For details have a look at [Scoop Quick Start](https://github.com/lukesampson/scoop/wiki/Quick-Start).

        set-executionpolicy remotesigned -scope currentuser
        iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

    {{< note "info" "Doesn't require admin rights, no UAC popups/elevation. Installs to ~/scoop/ by default." />}}

3. Install **Git**:

        scoop install git
        scoop install openssh

4. Install **Hugo**:

        scoop install hugo

5. Install **Node.js** (for npm):

        scoop install nodejs

7. Clone this repository:

        git clone git@github.com:bigclownlabs/bc-website.git

    {{< note "info" "GitHub supports SSH over 443 TCP port. Add Port 443 for ssh.github.com into ~/.ssh/config and use ssh.github.com instead of github.com." />}}

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
