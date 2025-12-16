1) Cookies: small data sent automatically with every HTTP request to server

-> max size- ~4kb
-> sent to server on every request
-> can have expiry date
-> can be HTTPonly & secure

when to use:
-> Authentication(jwt/session id)
-> Server needs the data
-> Not for large data

Cookie flages:
-> Expires: sets exact expiry date/time
-> Max-age: sets lifetime in seconds
-> Domain: specifies which domain can access the cookie example: Domain=example.com
-> Path: Cookie sent for matching path. example: Path=/admin
-> Secure: Prevents sending cookie over HTTP
-> HttpOnly: js canncot read document.cookie
-> Samesite:sent only on same site requests

2) LocalStorage: key-value storage in browser that never expires(until cleared)

-> max size- ~5-10mb
-> not sent to server
-> survives browser restart

when to use:
-> user preferences(remember user settings)
-> small app state

3) SessionStorage: same as localStorage but only for 1 tab session

-> max sixe- ~5mb
-> cleared when tab closed
-> not shared across tabs

when to use:
-> Temporary data
-> Form progress

4) IndexedDB: full client-side db(noSQL)

-> store large structured data
-> can store object,array,files
-> not sent to server

when to use:
-> Large data
-> Offline apps

# how to use ssh

ssh-keygen -t ed25519 -C "karanamsuhas80@gmail.com" // generate ssh key


Start-Service ssh-agent


ssh-add C:\Users\Suhas\.ssh\id_ed25519


ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINSLUJFh4QqkFEivEMSLSy2Kd6TL4A2dWaPpHUi4YcHo karanamsuhas80@gmail.com
// added this in github > settings > ssh and gpg keys > add ssh key

ssh -T git@github.com // test ssh connection


o/p:- Hi Suhas-Gk! You've successfully authenticated, but GitHub does not provide shell access.
