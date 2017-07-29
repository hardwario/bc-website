#!/bin/sh

hugo --baseURL="https://blog.bigclown.com/" --contentDir="content/blog-en" --destination="public/blog.bigclown.com"
hugo --baseURL="https://blog.bigclown.cz/" --contentDir="content/blog-cs" --destination="public/blog.bigclown.cz"
hugo --baseURL="https://doc.bigclown.com/" --contentDir="content/doc-en" --destination="public/doc.bigclown.com"
hugo --baseURL="https://doc.bigclown.cz/" --contentDir="content/doc-cs" --destination="public/doc.bigclown.cz"
hugo --baseURL="https://prj.bigclown.com/" --contentDir="content/prj-en" --destination="public/prj.bigclown.com"
hugo --baseURL="https://prj.bigclown.cz/" --contentDir="content/prj-cs" --destination="public/prj.bigclown.cz"
hugo --baseURL="https://www.bigclown.com/" --contentDir="content/www-en" --destination="public/www.bigclown.com"
hugo --baseURL="https://www.bigclown.cz/" --contentDir="content/www-cs" --destination="public/www.bigclown.cz"
