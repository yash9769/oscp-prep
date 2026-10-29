# OWASP Top 10 Testing Checklist — UBISL Black Box

**Target:** https://ubisl.co.in
**Tester:** yashodhan.rajapkar@envistacyberdefence.com
**Date Started:**

Legend: ✅ Tested - Not Vulnerable | ⚠️ Potentially Vulnerable | 🔴 Confirmed Vulnerable | ⬜ Not Tested

---

## A01 - Broken Access Control

| Test | Status | Notes |
|------|--------|-------|
| Forced browsing to restricted pages | ⬜ | |
| IDOR (Insecure Direct Object Reference) | ⬜ | e.g., `/user/123` → `/user/124` |
| URL parameter tampering | ⬜ | |
| Privilege escalation (if login available) | ⬜ | |
| HTTP method tampering (GET→POST→PUT) | ⬜ | |
| Directory listing enabled | ⬜ | |

**Tools:** Burp Suite (Intruder/Repeater), manual

---

## A02 - Cryptographic Failures

| Test | Status | Notes |
|------|--------|-------|
| HTTP instead of HTTPS | ⬜ | |
| Weak TLS version (SSLv3, TLS 1.0, 1.1) | ⬜ | |
| Weak cipher suites | ⬜ | |
| Sensitive data in URL / GET params | ⬜ | |
| Sensitive data in client-side storage | ⬜ | localStorage, cookies |
| Cleartext passwords in source/response | ⬜ | |

---

## A03 - Injection

| Test | Status | Notes |
|------|--------|-------|
| SQL Injection (GET/POST params) | ⬜ | |
| SQL Injection (HTTP headers) | ⬜ | User-Agent, Referer, Cookie |
| Blind SQLi | ⬜ | |
| Command Injection | ⬜ | |
| XPath Injection | ⬜ | |
| LDAP Injection | ⬜ | |
| NoSQL Injection | ⬜ | |
| Template Injection (SSTI) | ⬜ | |

**Tools:** SQLMap, manual (Burp)

---

## A04 - Insecure Design

| Test | Status | Notes |
|------|--------|-------|
| Missing rate limiting on login | ⬜ | |
| Missing CAPTCHA | ⬜ | |
| Business logic flaws | ⬜ | |
| Mass assignment | ⬜ | |

---

## A05 - Security Misconfiguration

| Test | Status | Notes |
|------|--------|-------|
| Default credentials | ⬜ | admin/admin, admin/password |
| Verbose error messages | ⬜ | Stack traces, DB errors |
| Unnecessary HTTP methods enabled | ⬜ | PUT, DELETE, TRACE |
| Directory listing | ⬜ | |
| Backup files exposed | ⬜ | .bak, .old, .orig |
| Server version disclosure | ⬜ | |
| Debug mode enabled | ⬜ | |
| .git / .svn exposed | ⬜ | |
| robots.txt / sitemap.xml (sensitive paths) | ⬜ | |

---

## A06 - Vulnerable and Outdated Components

| Test | Status | Notes |
|------|--------|-------|
| CMS version outdated (WordPress, Drupal) | ⬜ | |
| JS libraries with known CVEs | ⬜ | Retire.js |
| Server software with CVEs | ⬜ | |
| Third-party plugins vulnerable | ⬜ | |

---

## A07 - Identification and Authentication Failures

| Test | Status | Notes |
|------|--------|-------|
| Username enumeration | ⬜ | Different error messages |
| Weak password policy | ⬜ | |
| Account lockout missing | ⬜ | |
| Default credentials | ⬜ | |
| Password in URL | ⬜ | |
| Session token in URL | ⬜ | |
| Weak session token entropy | ⬜ | |
| Session not invalidated on logout | ⬜ | |
| "Remember me" cookie analysis | ⬜ | |

---

## A08 - Software and Data Integrity Failures

| Test | Status | Notes |
|------|--------|-------|
| Insecure deserialization | ⬜ | |
| Missing SRI on CDN resources | ⬜ | |
| CI/CD pipeline exposed | ⬜ | |

---

## A09 - Security Logging & Monitoring Failures

| Test | Status | Notes |
|------|--------|-------|
| No logging on failed logins | ⬜ | (check if lockout triggers) |
| Error pages reveal stack traces | ⬜ | |

---

## A10 - Server-Side Request Forgery (SSRF)

| Test | Status | Notes |
|------|--------|-------|
| URL parameter fetching remote resources | ⬜ | |
| Import/upload from URL feature | ⬜ | |
| Webhook / callback URL | ⬜ | |
| PDF/image generation from URL | ⬜ | |

---

## Additional Web Tests

| Test | Status | Notes |
|------|--------|-------|
| XSS - Reflected | ⬜ | |
| XSS - Stored | ⬜ | |
| XSS - DOM-based | ⬜ | |
| CSRF | ⬜ | |
| Open Redirect | ⬜ | |
| Clickjacking | ⬜ | |
| HTTP Request Smuggling | ⬜ | |
| File Upload (malicious file) | ⬜ | |
| Path Traversal / LFI | ⬜ | |
| API keys / secrets in JS | ⬜ | |
| CORS misconfiguration | ⬜ | |
| Subdomain takeover | ⬜ | |

---

## Vulnerability Summary

| # | Vulnerability | Severity | CVSS | Status |
|---|--------------|----------|------|--------|
|   |              |          |      |        |
