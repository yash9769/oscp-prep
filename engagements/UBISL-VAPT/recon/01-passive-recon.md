# Passive Recon — UBISL

**Target:** https://ubisl.co.in
**Type:** Black Box — No credentials, no prior knowledge
**Date:** 

---

## 1. WHOIS / DNS

```bash
# WHOIS
whois ubisl.co.in

# DNS records
dig ubisl.co.in ANY
dig ubisl.co.in A
dig ubisl.co.in MX
dig ubisl.co.in NS
dig ubisl.co.in TXT

# Reverse DNS
host $(dig +short ubisl.co.in)
```

**Findings:**
```
# Paste output here
```

---

## 2. Subdomain Enumeration

```bash
# Passive subdomain enum (no active scanning)
# Certificate transparency logs
curl -s "https://crt.sh/?q=%.ubisl.co.in&output=json" | jq '.[].name_value' | sort -u

# Subfinder (passive)
subfinder -d ubisl.co.in -silent

# Amass (passive only)
amass enum -passive -d ubisl.co.in
```

**Subdomains Found:**
```
# List here
```

---

## 3. Technology Fingerprinting (Passive)

```bash
# Whatweb
whatweb https://ubisl.co.in

# Check headers manually
curl -sI https://ubisl.co.in

# Wappalyzer CLI
wappalyzer https://ubisl.co.in
```

**Technologies Identified:**
- Server:
- Framework:
- CMS:
- JavaScript libs:
- WAF:

---

## 4. Google Dorking

```
site:ubisl.co.in
site:ubisl.co.in filetype:pdf
site:ubisl.co.in filetype:xlsx OR filetype:docx
site:ubisl.co.in inurl:admin
site:ubisl.co.in inurl:login
site:ubisl.co.in inurl:api
site:ubisl.co.in "index of"
"ubisl.co.in" ext:sql OR ext:bak OR ext:log
```

**Interesting Findings:**
```
# Note any sensitive exposures
```

---

## 5. Wayback Machine / Historical URLs

```bash
# Fetch archived URLs
curl -s "https://web.archive.org/cdx/search/cdx?url=*.ubisl.co.in/*&output=text&fl=original&collapse=urlkey" | sort -u

# Filter interesting paths
curl -s "https://web.archive.org/cdx/search/cdx?url=*.ubisl.co.in/*&output=text&fl=original&collapse=urlkey" | grep -E '\.(php|asp|aspx|jsp|json|xml|sql|bak|old|zip|tar)$'
```

**Historical URLs of Interest:**
```
# List here
```

---

## 6. Email / Employee Exposure

```bash
# theHarvester
theHarvester -d ubisl.co.in -b all

# Known contacts from engagement email:
# ashish.yadav@ubisl.co.in
# shubham.adsare@ubisl.co.in
# sachin.yadav@ubisl.co.in
# narayan.yedage@ubisl.co.in
# dhananjay.kamble@ubisl.co.in
# itsupport@ubisl.co.in
```

---

## 7. Shodan / OSINT

```bash
# Shodan CLI (if configured)
shodan host $(dig +short ubisl.co.in)

# Check if IP appears in breach data via public sources
```

**Shodan Results:**
```
# Paste here
```

---

## Notes / Observations
```
# Free-form notes during recon
```
