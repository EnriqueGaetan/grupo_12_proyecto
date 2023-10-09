-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2023 a las 02:48:19
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pintur`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `color`) VALUES
(1, 'white'),
(2, 'black'),
(3, 'grey'),
(4, 'brown'),
(5, 'beige'),
(6, 'red'),
(7, 'blue'),
(8, 'green');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `options`
--

CREATE TABLE `options` (
  `id` int(11) NOT NULL,
  `liters` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `options`
--

INSERT INTO `options` (`id`, `liters`) VALUES
(1, 1),
(2, 2),
(3, 5),
(4, 10),
(5, 15),
(6, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` blob DEFAULT NULL,
  `description` varchar(500) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `color_id` int(11) NOT NULL,
  `options_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `img`, `description`, `price`, `color_id`, `options_id`, `category_id`) VALUES
(1, 'Látex - Cielos Rasos', NULL, 'Látex para interiores. Evita el desarrollo de hongos. Especialmente formulado para ambientes propensos a la formación de hongos, como baños, cocinas, lavaderos, etc.', 2400, 1, 2, 1),
(2, 'Látex - Baños y cocinas', NULL, 'Látex para interiores. Evita el desarrollo de hongos. Especialmente formulado para ambientes propensos a la formación de hongos, como baños, cocinas, lavaderos, etc.', 2400, 1, 1, 1),
(3, 'Pintura - Pizarrones', NULL, 'Está formulado con resinas alquídicas especiales y pigmentos que otorgan excelente poder cubritivo, desarrollado especialmente para permitir la escritura con tiza y un fácil borrado. Nivela muy bien y tiene gran resistencia al rayado y frotado.', 2000, 8, 1, 1),
(4, 'Pintura para piletas', NULL, 'Es una formulación especial a base de polímeros acrílicos que le otorga a la película impermeabilidad, gran adherencia y flexibilidad. Evita la adherencia de algas, hongos, moho y suciedad. Es resistente a los productos recomendados para el tratamiento del agua. Blanco y dos colores listos para usar.', 15300, 7, 5, 2),
(5, 'Pintura para techos', NULL, 'Es de base acuosa y super elástica, con una resistencia máxima a los agentes atmosféricos, en especial en techos expuestos a temperaturas de 15° C bajo cero, ya que la membrana no se quiebra ni pierde elasticidad. Además, cuenta con un adeherencia óptima sobre diferentes sustratos y es totalmente transitable. Calidad superior para que puedas proteger tus techos y terrazas.', 14000, 1, 6, 2),
(6, 'Enduido interior', NULL, 'Producto auxiliar diseñado para corregir imperfecciones en diversas superficies. No chorrea y permite realizar distintas texturas, aplicado solo o combinado con diferentes materiales.', 2780, 1, 1, 3),
(7, 'Enduido exterior', NULL, 'Producto auxiliar diseñado para corregir imperfecciones en diversas superficies. No chorrea y permite realizar distintas texturas, aplicado solo o combinado con diferentes materiales.', 3100, 1, 1, 3),
(8, 'Protección externa', NULL, 'Esmalte Sintético Brillante.Especialmente formulado para ser aplicado sobre metales ferrosos o maderas sin necesidad de fondos.Previene e inactiva la corrosión otorgando excelente protección a los metales. Sus componentes le otorgan muy buena pintabilidad y una nivelación superior.Excelente terminación. Gran resistencia a la intemperie, a la abrasión, al uso y a los lavados.Blanco y 10 colores listos para usar, entonables con Tonalba hasta 37,5 cm3/litro.', 3100, 6, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productscategory`
--

CREATE TABLE `productscategory` (
  `id` int(11) NOT NULL,
  `category` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productscategory`
--

INSERT INTO `productscategory` (`id`, `category`) VALUES
(1, 'interior'),
(2, 'exterior'),
(3, 'complementos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `cart_id` int(11) NOT NULL,
  `total_price` int(10) UNSIGNED NOT NULL,
  `items` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shoppingcarts`
--

INSERT INTO `shoppingcarts` (`cart_id`, `total_price`, `items`, `product_id`, `user_id`) VALUES
(1, 17700, 2, 1, 1),
(2, 17700, 2, 4, 1),
(3, 2000, 1, 3, 2),
(4, 14000, 1, 5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `category_id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `image` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `category_id`, `email`, `password`, `image`) VALUES
(1, 'serrana', 'soler', 1, 'ssoler@dh.com', '12345', NULL),
(2, 'lucas', 'banegas', 1, 'lbanegasr@dh.com', '12345', NULL),
(3, 'rocio', 'barrios', 1, 'rbarrios@dh.com', '12345', NULL),
(4, 'ezequiel', 'bonet', 1, 'ebonet@dh.com', '12345', NULL),
(5, 'enrique', 'gaetan', 1, 'egaetan@dh.com', '12345', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userscategory`
--

CREATE TABLE `userscategory` (
  `id` int(11) NOT NULL,
  `category` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `userscategory`
--

INSERT INTO `userscategory` (`id`, `category`) VALUES
(1, 'administrator'),
(2, 'guest');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productscolors` (`color_id`),
  ADD KEY `productsoptions` (`options_id`),
  ADD KEY `productscategorys` (`category_id`);

--
-- Indices de la tabla `productscategory`
--
ALTER TABLE `productscategory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `userscategory`
--
ALTER TABLE `userscategory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `options`
--
ALTER TABLE `options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productscategory`
--
ALTER TABLE `productscategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `userscategory`
--
ALTER TABLE `userscategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `productscategorys` FOREIGN KEY (`category_id`) REFERENCES `productscategory` (`id`),
  ADD CONSTRAINT `productscolors` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `productsoptions` FOREIGN KEY (`options_id`) REFERENCES `options` (`id`);

--
-- Filtros para la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `shoppingcarts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `userscategory` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
