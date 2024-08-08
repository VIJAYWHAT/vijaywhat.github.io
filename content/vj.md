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

Gurukulams is an online education platform built by students for students.

80% of the contributions come from people with little or no experience. In fact, most of our contributors are either teachers or students.

This means we need to create a codebase that is simple and secure so everyone can collaborate and contribute.

Our CI/CD practices have to go through all the quality checks to make sure any contribution we get is of good quality.

--------------------------------------------------

### Traditional CI/CD

Now let me explain our approach to CI/CD pipelines, which has three main parts.

Firstly, we want to make sure everyone follows proper **coding standards**. We do this with a tool called **Checkstyle**.

Secondly, we want to make sure all of our contributions follow the **architectural guidelines** we have set up. We achieve this with a tool called **ArchUnit**.

And lastly, and most importantly, we want to make sure our **codebase is thoroughly tested** with **100% coverage**. We do this with a tool called **JaCoCo**.

We expected these practices would give us better control over our software. But we were surprised by an unexpected challenge.

----------------------------------------------

### The Challenge

“Imagine you just received a notification on your phone about a new Android update. Most of us don’t think twice—we hit ‘Update,’ knowing it will bring improvements, fix bugs, and maybe even introduce new features.  right?”

“But in software development, the mindset often shifts. When it comes to upgrading the codebase, many developers hesitate. Question Why? They worry about potential disruptions, the effort involved, and sometimes, it’s just easier to leave things as they are. This leads to a significant problem: technical debt.”

“Shouldn’t the approach be the opposite?, as developers, we upgrade by default and only seek excuses if we don’t

Imagine the benefits: a **healthier**, more **secure**, and **efficient** codebase”

“Just as we trust that an Android update will keep our phones running smoothly, we should trust that regular updates will do the same for our software. It’s about shifting our mindset from **reactive** to **proactive**, ensuring our applications are always ready for whatever comes next.”

----------------------------------------------

### Our Approach

To address technical debt and keep our codebase up-to-date, we implemented these steps:

**Automated Dependency Updates:** We use the Maven Versions plugin with the goal of **“Upgrade”**. This tool scans our project and checks for the latest versions of all our dependencies. If it finds any updates, it automatically updates the pom.xml file and creates a backup called pom.xml.versionsBackup. This way, we’re always aware of the latest updates and can act on them immediately.”

```
mvn versions:update-parent versions:update-properties
```

**Build Failure on Pending Upgrades:** 

To enforce these updates, we use the Maven Enforcer plugin. It **checks for the backup file** if the backup file **pom.xml.versionsBackup** is found, it means there are pending updates. In this case, the build process fails. This forces us to address the updates right away”

```
mvn clean package
```

**Managing Exceptions:**

“Of course, there are times when certain updates need to be excluded — Maybe due to cause issues or are critical to our project. To handle this, we’ve set up a way to **skip these specific updates** without affecting the rest of the process. This ensures that we can still keep our codebase up-to-date while dealing with any special cases separately.”