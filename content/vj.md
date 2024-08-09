---
title: "Exploring the Next Frontier : Beyond CI/CD"
date: 2024-02-28
pubtype: "Blog"
featured: true
description: ""
tags: ["CI/CD"]
link: ""
fact: ""
weight: 400
sitemap:
  priority : 0.8
---

**Good morning everyone,**

I am Vijay Raja. I am an open-source, full-stack developer.

I thank Bangalore JUG for giving me this wonderful opportunity to share my practical experience with you all. What I'm going to talk about is based on my experience building an open-source project called Gurukulams.

-----------------------------------------------

Gurukulams is an online education platform    built by students for students.

80% of the contributions come from people    with little or no experience. 
In fact, most of our contributors   are either students or teachers.

This means we need to create a codebase     that is simple and secure    so everyone can collaborate and contribute.

Our CI/CD practices have to go through    all the quality checks to make sure    any contribution we get is of good quality.

--------------------------------------------------

### Traditional CI/CD

Now let me explain our approach towards CI/CD pipelines, which has three main parts.

At first, we want to make sure everyone follows proper **coding standards**. We do this with a tool called **Checkstyle**.

and next, we want to make sure all of our contributions follow the **architectural guidelines** we have set up. We achieve this with a tool called **ArchUnit**.

And lastly, and most importantly, we want to make sure our **codebase is thoroughly tested** with **100% coverage**. We do this with a tool called **JaCoCo**.

We expected these practices would give us better control over our software. But we were surprised by an unexpected challenge.

i invite raja to explain further,

----------------------------------------------

### Our Solutions

Thank you Raja,

Let me explain the solutions,

from the devops side we have three step in our solution,

First, we need to figure out are there any latest upgrades available.

Next, if yes, we need to failed our build,

but them, in case development team want some time or has valid reasons not to upgrade.

we need to accomtade them also, 

let me show through a demo,

// open Bash

we use maven version plugin with the goal of update parent and update properties,
// ./mvnw.cmd versions:update-parent versions:update-properties

now we see the maven version plugin, here i am using the update-parent

it will check the parent section in my project and it have latest version available, it will update my pom.xml file,

and i am using update-properties, it will check the properties section in my project, if any dependencies have a latest version to upgrade, i will update that in my pom.xml file,

now let us see that commands exucution completed or not, 

ok its completed, 

now here you see it check version for all the dependency and almost every dependencies in latest version, 
except this jsonwebtoken plugin, 
now i was showing updated to 0.11.5 to 0.12.6, it also updated in my pox.xml file,

now we see the pom.xml file, here you can see that i was already in 0.11.5 and now it is updated into 0.12.6

now we try to build the project, as a devops engineer i want to make sure the build fails,
because we have upgrade in one dependency. the development team was not updates that,

we want to make sure that the build fails or not. **build was failed**.

also it tells the details -> Please check if you have any older dependencies.

we acheive this with the help of maven enforcer plugin

we see the enforcer plugin configuration in our code.

here you can see that enforcer plugin in my pom.xml file, we configure rules for that, 

we fails the build when the pom.xml.backupversion file is exist, in running of maven version plugin command,

if its find any latest upgrades it will update the pom.xml file and also create a file called pom.xml.backupversion.

we use this to check the updates are available or not, in our case we have a upgrade so we fails the build. 


as a devops we want to make sure we give a option for development team to exclude any version, becuase that purticular verion upgrade might take time or something like that,

we need to make sure we accomdate that as well as.

to acheive this we can add entry in this file, for that dependency

then we again try to check the version upgrade.

i am running this command again, here you see that it checking for dependecy and have it was exclude the jsonwebtoken.

it was succesfully excluded.

now we just to make sure we can check backfile created or not, 

here we don't have any backupfil created, so the build will success.

that's all i had thank you,

now i invite raja to explain further.


**Automated Dependency Updates:**

// mvn versions:update-parent versions:update-properties

**Build Failure on Pending Upgrades:** 

**Managing Exceptions:**


