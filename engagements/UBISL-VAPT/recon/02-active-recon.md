# Active Recon — UBISL

> ⚠️ **Active scans generate traffic to the target. Only run after testing window is confirmed with client.**

**Target:** ubisl.co.in
**IP:** (resolve before scanning)
**Date:** 

---

## 1. Resolve Target IP

```bash
TARGET="ubisl.co.in"
IP=$(dig +short $TARGET | tail -1)
echo "Target IP: $IP"
```

**IP:**

---

## 2. Port Scan

```bash
# Quick top ports
nmap -sV -sC -T4 --top-ports 1000 $IP -oN recon/nmap-top1000.txt

# Full port scan
nmap -sV -sC -p- -T4 $IP -oN recon/nmap-full.txt

# UDP scan (top ports)
sudo nmap -sU --top-ports 100 $IP -oN recon/nmap-udp.txt
```

**Open Ports:**
| Port | Service | Version | Notes |
|------|---------|---------|-------|
|      |         |         |       |

---

## 3. Web Service Enumeration

```bash
# Nikto (light scan)
nikto -h https://ubisl.co.in -output recon/nikto.txt

# Directory/file bruteforce
gobuster dir -u https://ubisl.co.in -w /usr/share/wordlists/dirb/common.txt -x php,html,asp,aspx,js,json,txt,xml,bak -o recon/gobuster-common.txt -t 30
gobuster dir -u https://ubisl.co.in -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o recon/gobuster-medium.txt -t 30

# Feroxbuster (recursive)
feroxbuster -u https://ubisl.co.in -w /usr/share/wordlists/dirb/common.txt -o recon/feroxbuster.txt

# Virtual host / subdomain bruteforce
gobuster vhost -u https://ubisl.co.in -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt
```

**Interesting Paths Found:**
```
# List discovered endpoints, admin panels, login pages, APIs
```

---

## 4. SSL/TLS Analysis

```bash
# Check SSL cert
openssl s_client -connect ubisl.co.in:443 -showcerts

# SSLScan
sslscan ubisl.co.in

# Testssl
testssl.sh https://ubisl.co.in
```

**SSL Issues:**
```
# Note weak ciphers, expired certs, misconfigs
```

---

## 5. HTTP Headers Analysis

```bash
curl -sI https://ubisl.co.in
# Check for:
# - Missing security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
# - Server version disclosure
# - Cookie flags (Secure, HttpOnly, SameSite)
```

**Missing Security Headers:**
- [ ] Content-Security-Policy
- [ ] Strict-Transport-Security
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy
- [ ] Permissions-Policy

---

## Notes
```
# Active recon observations
```
