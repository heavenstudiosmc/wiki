---
title: FAQ
---

# ❓ Frequently Asked Questions (FAQ)

### Which Java version do I need?
All our modern plugins (including HeavenRandomKits) require **Java 17** or higher. We highly recommend using the latest Java 17 or Java 21 build available for your OS.

### My server version is 1.18, will it work?
Currently, our plugins are compiled against **Paper 1.20.1** API. While they may work on 1.19+ through cross-version compatibilities (like XSeries), we officially support **1.20.x and 1.21.x**.

### Can I transfer my license to another account?
Licenses are strictly bound to the Discord account that claimed them. If you lost access to your account, please open a ticket with proof of purchase.

### Why is the plugin disabling itself on startup?
This is almost always related to the licensing system. Check your console logs:
- **"Invalid or expired license"**: Check that the key in `config.yml` matches exactly what the bot gave you.
- **"No connection to the license server"**: Your server host might be blocking external HTTP requests.

### How do I report a bug?
Please open a ticket in our [Discord Server](https://discord.heavenstudios.site) and provide your `latest.log`, the plugin version, and steps to reproduce the issue.
