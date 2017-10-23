# :diamond_shape_with_a_dot_inside: franz-kokoro-io :diamond_shape_with_a_dot_inside:
A franz plugin for [kokoro.io](https://kokoro.io)

- [kokoro-io - GitHub](https://github.com/kokoro-io)

![overview](overview.png)


# :thinking: How to use this :thinking:

1. Clone this
2. Change `{basic-auth-user}` and `{basic-auth-password}` of `"serviceURL"` in package.json for Basic Authentication
    - `"serviceURL": "https://{basic-auth-user}:{basic-auth-password}@kokoro.io/users/sign_in",`
3. Copy this directory to `$HOME/.config/Franz/Plugins` (Linux)


# :pray: Thanks :pray:

- [mohe (the origin of index.js)](https://gist.github.com/mohemohe/8ccc8a722d6a675164eecebdabe5f2ee)
- kokoro.io users (how to login to basic auth by URI)
