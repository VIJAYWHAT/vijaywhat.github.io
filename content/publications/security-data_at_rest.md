---
title: "Basics of Cybersecurity - Data At Rest"
date: 2023-01-21
pubtype: "Presentations"
featured: true
description: "This Presentation delves into the basics of cybersecurity, highlighting the importance of protecting data at rest, in transit, and in use. It discusses techniques such as pseudonymization and anonymization to secure sensitive information and prevent data breaches."
tags: ["Cybersecurity","Data Security","Data at Rest","Pseudonymization","agile","Secret Key"]
image: "/img/three-states-of-data.png"
link: "https://techatpark.com/posts/security-data-at-rest/"
fact: "Interesting little tidbit shown below image on summary and detail page"
weight: 400
sitemap:
  priority : 0.8
---

When it comes to protecting confidential information, we find that clients require different approaches or pose different protection needs. Some clients need to protect the information on their mobile computers or laptops in case they are lost. Others want to keep their documentation protected on file servers so that it can even be protected from improper access by IT staff. Sometimes some customers need to protect documentation when it travels attached to an email because they use managed email servers or in the cloud. Some customers ask to protect the documentation when it is sent to third parties or even internally in order to minimize the possibility of it being copied, unprotected or accessed by inappropriate users.

The three states of data

We can consider three states for information or data:

1. Data at rest: By this term we mean data that is not being accessed and is stored on a physical or logical medium. Examples may be files stored on file servers, records in databases, documents on flash drives, hard disks etc.

2. Data in transit: Data that travels through an email, web, collaborative work applications such as Slack or Microsoft Teams, instant messaging, or any type of private or public communication channel. It’s information that is traveling from one point to another.

3. Data in use: When it is opened by one or more applications for its treatment or and consumed or accessed by users.

Data at rest refers to the measures and techniques used to protect data from unauthorized access, modification, or destruction while in storage. Overall, Data at rest is a critical component of protecting sensitive information, and organizations should implement a comprehensive security strategy that includes all of these components. Regularly monitoring, testing and updating the security measures will help to ensure that data is kept secure. to protect your sensitive data using one of the below

1. Pseudonymized
2. Anonymized
3. Generalized

These techniques can be used to detect data breaches and data leakages, and as an element of compliance, like in GDPR, HIPAA, and other regulations. This can help organizations to take steps to protect sensitive information and to prevent data breaches from occurring. Before we go to the techniques we need to understand

1. Plain Text
2. Cipher Text
3. Secret Key
4. Data de-identification converts plain text to cipher text by removing or obscuring personal identifying information from a plain text, making it less likely to be used to identify an plain text. 
5. Data identification - is the process of identifying plain text from cipher text.

## Pseudonymized (Encryption)
The term “pseudonymity” refers to using a different name on social media, such as a pen-name or nick-name. It is typically utilized to conceal your true identity while maintaining your identity under another name. Technically we call this technique as encryption

## Anonymity (Hashing)
In general, anonymity implies that no one is aware of your true identity, while they are undoubtedly aware of your online activity. It means that you can carry on with your movements while staying anonymous. Your actions and your true identity are kept separate by anonymity.Put simply, anonymity is a much stronger form of privacy than pseudonymity,Technically we call this technique as encoding. Eg. user passwords 

## Generalized
Generalization is the way of bucketing/masking the data as partial content. Eg. acoount number the last 4 digits

It is important to note that de-identifying data is not foolproof and there is always a risk of re-identification. Therefore, it's important to continuously monitor the data and to use multiple methods of de-identification to reduce the risk of re-identification.

Overall, data de-identification is a critical aspect of data privacy, and organizations should take the necessary steps to ensure that personal identifying information is removed or obscured in a way that effectively protects the privacy of individuals.

In addition to these methods, there are also several standards and frameworks that organizations can use to ensure that their data de-identification practices are effective. These include the Health Insurance Portability and Accountability Act (HIPAA) de-identification standard, the Safe Harbor Method, and the Statistical De-identification Method.

[vj](vj.html)
### Ref
1. https://www.gemini.com/cryptopedia/anonymity-vs-pseudonymity-basic-differences#section-what-does-a-pseudonym-mean-in-crypto
2. https://www.infoq.com/news/2023/01/aws-s3-default-encryption/
3. https://medium.com/@chintanaw/java-string-masking-performance-why-you-should-stop-worrying-and-rewrite-everything-in-c-849a79c04d0f
4. https://www.bbc.com/news/technology-60144498
5. https://www.baeldung.com/spring-security-5-default-password-encoder
6. https://github.com/p-h-c/phc-winner-argon2
7. https://www.twelve21.io/how-to-choose-the-right-parameters-for-argon2/
8. https://digitalguardian.com/blog/data-protection-data-in-transit-vs-data-at-rest