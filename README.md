gpgPass is a simple password manager using GPG to encrypt everyting.

# The idea of gpgPass
The idea is a simple, gpg secured password manager. In an ideal world, the private key exists only once (e.g. on a USB-Stick of the user) and will be used to unlock the manager (after entering a passphrase).

The manager will provide features to create, change, analyse password but also to automatically enter and sync them (via ftp or other services). Due to the fact that the files of gpgPass are secure (trusting the gpg implementation) syncing is not a huge security risk.
# FAQ
## Why another password manager???
I don't like any manager I tried so far, so this is my attempt to create the perfect manager (for _me_ the perfect).
## Current state of developement
_Currently_ this is a prototype without any functionality.
## Is this a website? o.O
No, this is normal desktop application using the [Electron](https://electron.atom.io) framework, which makes desktop apps out of HTML, CSS and JS.
## How to run gpgPass?
Just go into the directory of the source and execute ``electron ./``.

Of course you need to have electron installed: ``sudo npm install electron``.
