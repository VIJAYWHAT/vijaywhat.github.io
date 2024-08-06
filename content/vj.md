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

Now let me explain our approach to CI/CD pipelines, which has three main parts.

Firstly, we want to make sure everyone follows proper coding standards. We do this with a tool called Checkstyle.

Secondly, we want to make sure all of our contributions follow the architectural guidelines we have set up. We achieve this with a tool called ArchUnit.

And lastly, and most importantly, we want to make sure our codebase is thoroughly tested with 100% coverage. We do this with a tool called JaCoCo.

We expected these practices would give us better control over our software. But we were surprised by an unexpected challenge.

----------------------------------------------

Our application, originally developed with Spring Boot 2, went through many changes. However, developers found it difficult to keep the codebase up-to-date with new versions. Many were not concerned with upgrades, leading to significant technical debt—a daunting challenge.

Consider this: When you receive a new Android update on your phone, you typically upgrade without hesitation, understanding the benefits it brings and the potential issues it fixes. However, in software development, the mindset often shifts. Developers frequently question why they should upgrade, focusing on potential disruptions or the effort required, rather than proactively seeking improvements.

The core issue is that developers tend to upgrade only when absolutely necessary. In contrast, regular and proactive updates are essential for maintaining a healthy, secure, and efficient codebase.

Shouldn’t the approach be the opposite? We should upgrade by default and seek reasons/excuses only if we don’t.