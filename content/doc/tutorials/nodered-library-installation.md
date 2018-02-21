---
title: "NodeRED Library Installation"
---
In some projects it is neccesary to use some **NodeRED** libraries wich are not included in default installation of **NodeRED**.

## Library installation within Node-RED

1. Go to your **NodeRED** window/tab in your web browser.

2. Click on hamburger menu on the top right corner and select *Manage pallete*.

    {{% img-zoom src="nodered-1.png" width="300" %}}

3. After click on *Manage pallete* you should see something like this. In *Nodes tab* you can see actually installed libraries to you **NodeRED**. In a *Install* tab you can search for a new libraries. As you can see on the picture I have searched for a blynk library which are commonly used in integrations (**node-red-contrib-blynk-ws**).

    {{% img-zoom src="nodered-2.png" width="500" %}}
    
## Library installation using CLI
If there is no *Manage palette* option in the menu, you can still use CLI to install library. 

1. Run **npm install ...** command to install new library. Replace **...** with the name of your library, you can find libraries **[here](https://flows.nodered.org/ "Node-RED Library")**.

2. When you successfully install your library - you see something like 
    
    `node-red-contrib-blynk-websockets@0.0.3`   
    `added 5 packages in 1.66s`

    as a result, you will need to restart Node-RED for it to pick-up the new nodes.
    Run   
   
    `pm2 restart node-red`   
   
    and you'll be fine.

3. Now, reload the page with Node-RED in your web browser and you should find new nodes in the palette on the left side of your screen.
