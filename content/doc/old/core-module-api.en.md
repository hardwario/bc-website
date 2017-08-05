# Core Module API


If you want to dive into firmware development on Core Module we recommend you to get familiar with the API reference.
The complete API can be found on the following URL:


**http://sdk.bigclown.com**


**These are the goals we follow for the API development:**


* Easy access to the underlying platform hardware.

* Instant declarative use of BigClown components.

* Consistent and clean design across the whole library.

* Modularity and object-like oriented approach.

* Self-explanatory names for functions, types, variables, etc.

* All headers are documented and accompanied by usage examples.


## Automatic Documentation Build


All APIs are documented using **Doxygen-style comments directly in source code** of the firmware library.
We generate documentation automatically using Travis CI (on master branch).
The generated content is hosted via GitHub Pages (gh-pages branch).


## Sources for Documentation


Firmware library can be found in this repository:


**https://github.com/bigclownlabs/bc-core-module-bcl**


If you want to start your own firmware development, you probably want to clone the project skeleton which uses the **above repository as Git submodule**.
[Click here](core-module-setup.md) for more information about the development setup.


More information about Core Module basics can be found on [this page](core-module.md).

> **Note** You can use Core Module as a "bare-metal" hardware platform without our firmware library.
>          But this approach requires some extra expertise and low-level hardware knowledge.
