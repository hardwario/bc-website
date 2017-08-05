# Turris Omnia LXC

<!-- toc -->

## Vytvoření kontejneru přes SSH

* Připoj se na SSH routeru:

* Doinstaluj si ovladač pro USB serial:
  ```
  opkg update && opkg install kmod-usb-acm
  ```

* Tímto příkazem zahájíš vytváření kontejneru s názvem _test_:
  ```
  lxc-create -t download -n test
  ```

* Pro Ubuntu Xenial postupně vypň:
  ```
  Distribution: Ubuntu
  Release: Xenial
  Architecture: armv7l
  ```

* Zda byl opravdu vytvořen se můžeš přesvědčit takto:
  ```
  lxc-ls
  ```

* Tímto příkazem vložíš do konfigurace kontejneru jménem _test_ mount point na `/dev/ttyACM0`, pod kterým se hlásí naše USB:
  ```
  echo -e "
  lxc.autodev = 1
  lxc.group = onboot
  lxc.start.auto = 1
  lxc.start.delay = 30
  lxc.cgroup.devices.allow = c 166:* rwm
  lxc.mount.entry = /dev/ttyACM0 dev/ttyACM0 none  bind,create=file 0 0" >> /srv/lxc/test/config
  ```

* Nastartuj kontejner:
  ```
  lxc-start --name test
  ```

* Seznam spuštěných kontejnerů:
  ```
  lxc-ls --active
  ```

* Informace o kontejneru včetně IP adresy:
  ```
  lxc-info --name test
  ```

* Pokud chceš aby kontejner startoval i po restartu routru:
  ```
  echo -e "
  config container
      option name test
      option timeout 30
  " >>  /etc/config/lxc-auto
  ```

  echo -e "\nconfig container\n\toption name test\n\toption timeout 30\n" >>  /etc/config/lxc-auto

* Připoj se na kontejner:
  ```
  lxc-attach --name test
  ```

## Konfigurace kontejneru

* Oprava locales:
  ```
  sudo sh -c "echo LC_ALL=C >> /etc/default/locale"
  ```

* Mít aktuální systém je blaho, tak šup šup:
  ```
  apt update && apt upgrade -y
  ```

### Instalace SSH serveru

* Lézt na SSH přes root není moc cool, tedy vytvoř si nového uživatele:
  ```
  adduser karel
  ```

* Přidej se do skupiny _sudo_:
  ```
  usermod -aG sudo karel
  ```

* Nainstaluj SSH server:
  ```
  apt install openssh-server
  ```

* Nyní by ses měl být schopen připojit přes SSH:

* Odpojíš se pomocí:
  ```
  exit
  ```

