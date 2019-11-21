# LaComandaGGT

## con dominio propio :)

http://restaurantelacomanda.tk/

https://trittog.github.io/TP_Lab4_2c_2019/


## Los codigos QR:

PARA ENTRAR EN LA WEB:
<img src="./qr_entrada.png" border="1">


PARA VER MESAS DISPONIBLES:
<img src="./EstasParaVerMesas.png" border="1">



## Login
```
Aca se puede ingresar a la pagina con un usuario propio, en caso de ser un Cliente normal, tiene la posibilidad de registrarse, en caso de ser un tipo de socio (mozo,cocinero,admin, etc) el registro lo puede hacer UNICAMENTE un administrador.
```
<img src="./fotos%20README/Comanda-login2.png" border="1">


## Pagina Principal

```
Esta es la pagina principal de la pagina web, la cual posee toda la funcionalidad, rapidamente se puede apreciar en la parte superior izquierda su nombre de usuario y que tipo de usuario es, en caso de ser socio, podra acceder a la pestaña "socios" en caso contrario se le informara que no tiene los permisos.
  Posee tambien el apartado para realizar pedido, seguir el pedido, ver el menu, mesas disponibles etc.
```
<img src="./fotos%20README/Comanda-principal.png" border="1">

## Apartado Socios

### Pedidos

```
Los pedidos es la parte mas compleja del sistema, en este apartado, segun el tipo de empleado que ingresa, se mostrara los pedidos correspondientes a ese sector (caso Administrador podra ver TODOS los pedidos), desde aqui cada empleado podra modificarlo (en preparacion, pendiente, listo para servir, etc) y le asigna un tiempo aproximado de finalizacion
```
<img src="./fotos%20README/Comanda-socios-pedidos.png" border="1">

### Usuarios

```
Desde esta seccion un administrador podra crear, borrar o modificar usuarios.
```
<img src="./fotos%20README/Comanda-socios-usuarios.png" border="1">

### Mesas

```
Aqui se pueden ver todas las mesas existentes con su estado y codigo, el administrador del sistema podra modificarlas borrarlas o crear una mesa nueva.
```
<img src="./fotos%20README/Comanda-socios-mesas.png" border="1">

### Menú

```
Aqui el ADMINISTRADOR puede ver el menu y modificarle el precio, agregar un nuevo plato o eliminar algun item.
```
<img src="./fotos%20README/Comanda-socios-carta.png" border="1">

### Facturacion

```
Aqui solo el ADMINISTRADOR podra generar el reporte de ventas en PDF o EXCEL.
```
<img src="./fotos%20README/Comanda-socios-facturacion.png" border="1">

## Principal

### Realizar Pedido

```
Un usuario podra realizar un pedido seleccionando items del menu luego debera poner el codigo de su mesa para que el pedido este creado, este se inicializara como "Pendiente" y retornara el codigo del pedido al usuario
```
<img src="./fotos%20README/Comanda-socios-pedidoNuevo.png" border="1">

### Seguir Pedido

```
Desde aqui un usuario que realizo un pedido, tomara su codigo y le retornara el tiempo restante y el estado de su pedido, ademas de aqui podra cancelar su pedido solo si este no esta en preparacion ya.
```
<img src="./fotos%20README/Comanda-socios-seguirPedido.png" border="1">

### Ver la carta

```
Aqui se puede ver la carta completa.
```
<img src="./fotos%20README/Comanda-carta.png" border="1">

### Quienes Somos?

```
Apartado donde se da informacion del lugar.
```
<img src="./fotos%20README/Comanda-quienSoy.png" border="1">

### Mesas Disponibles

```
Aqui se debe escanear el codigo QR que esta en la puerta del local
```
<img src="./fotos%20README/Comanda-mesasDisponibles.png" border="1">
```
Una vez escaneado, te mostrara las mesas disponnibles para sentarse
```
<img src="./fotos%20README/Comanda-mesasDisponibles2.png" border="1">


### Mis Pedidos

```
Muestra los pedidos realizados por el usuario, los guarda en localstorage
```
<img src="./fotos%20README/Comanda-misPedidos.png" border="1">
