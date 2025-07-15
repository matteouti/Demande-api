-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 15 juil. 2025 à 13:57
-- Version du serveur : 8.0.30
-- Version de PHP : 8.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pret_bancaire`
--

-- --------------------------------------------------------

--
-- Structure de la table `contrat`
--

CREATE TABLE `contrat` (
  `contratId` int NOT NULL,
  `offreId` int NOT NULL,
  `date_signature` date NOT NULL,
  `montant_total` decimal(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contrat`
--

INSERT INTO `contrat` (`contratId`, `offreId`, `date_signature`, `montant_total`) VALUES
(1, 1, '2025-07-15', 50000.00);

-- --------------------------------------------------------

--
-- Structure de la table `criteres_evaluation`
--

CREATE TABLE `criteres_evaluation` (
  `id` int NOT NULL,
  `demandeId` int NOT NULL,
  `score` int NOT NULL,
  `resultat` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_evaluation` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `criteres_evaluation`
--

INSERT INTO `criteres_evaluation` (`id`, `demandeId`, `score`, `resultat`, `date_evaluation`) VALUES
(1, 1, 85, 'Favorable', '2025-07-15 11:12:10');

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `demandeId` int NOT NULL,
  `client_nom` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `duree` int NOT NULL,
  `statut` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'en attente',
  `date_demande` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`demandeId`, `client_nom`, `montant`, `duree`, `statut`, `date_demande`) VALUES
(1, 'Matteouti', 3000000.00, 2, 'en attente', '2025-07-15 10:06:00'),
(2, 'Marie', 10000000.00, 5, 'en attente', '2025-07-15 10:50:30');

-- --------------------------------------------------------

--
-- Structure de la table `offre`
--

CREATE TABLE `offre` (
  `offreId` int NOT NULL,
  `demandeId` int NOT NULL,
  `taux` decimal(5,2) NOT NULL,
  `mensualite` decimal(10,2) NOT NULL,
  `duree` int NOT NULL,
  `date_offre` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `offre`
--

INSERT INTO `offre` (`offreId`, `demandeId`, `taux`, `mensualite`, `duree`, `date_offre`) VALUES
(1, 1, 3.50, 2500.00, 24, '2025-07-15 10:54:45'),
(2, 2, 2.50, 2000.00, 12, '2025-07-15 11:01:48');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contrat`
--
ALTER TABLE `contrat`
  ADD PRIMARY KEY (`contratId`),
  ADD KEY `offreId` (`offreId`);

--
-- Index pour la table `criteres_evaluation`
--
ALTER TABLE `criteres_evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `demandeId` (`demandeId`);

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`demandeId`);

--
-- Index pour la table `offre`
--
ALTER TABLE `offre`
  ADD PRIMARY KEY (`offreId`),
  ADD KEY `demandeId` (`demandeId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contrat`
--
ALTER TABLE `contrat`
  MODIFY `contratId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `criteres_evaluation`
--
ALTER TABLE `criteres_evaluation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `demande`
--
ALTER TABLE `demande`
  MODIFY `demandeId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `offre`
--
ALTER TABLE `offre`
  MODIFY `offreId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contrat`
--
ALTER TABLE `contrat`
  ADD CONSTRAINT `contrat_ibfk_1` FOREIGN KEY (`offreId`) REFERENCES `offre` (`offreId`) ON DELETE CASCADE;

--
-- Contraintes pour la table `criteres_evaluation`
--
ALTER TABLE `criteres_evaluation`
  ADD CONSTRAINT `criteres_evaluation_ibfk_1` FOREIGN KEY (`demandeId`) REFERENCES `demande` (`demandeId`) ON DELETE CASCADE;

--
-- Contraintes pour la table `offre`
--
ALTER TABLE `offre`
  ADD CONSTRAINT `offre_ibfk_1` FOREIGN KEY (`demandeId`) REFERENCES `demande` (`demandeId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
