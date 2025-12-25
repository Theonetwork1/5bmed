# 5BMed - Plateforme de recherche de Pharmacie et d'achat de médicaments et de matériels médicaux en Ligne en Haïti

5BMed est une plateforme innovante qui connecte les patients avec les pharmacies en Haïti, facilitant l'accès aux médicaments et aux matériels médicaux essentiels. La plateforme offre également une solution POS complète pour automatiser la gestion des pharmacies.

## 🎯 Mission

Garantir au bon patient le bon médicament, au bon dosage, au bon moment et par la bonne voie, en rendant l'accès aux traitements plus simple, rapide et sécurisé partout en Haïti, tout en automatisant les pharmacies grâce à une solution POS complète et moderne.

## ✨ Fonctionnalités

### Pour les Patients
- 🔍 Recherche de médicaments et matériels médicaux
- 💰 Comparaison de prix en temps réel
- 💳 Paiement sécurisé (MonCash/NatCash)
- 🚚 Livraison 24/24 - 7/7
- 📍 Localisation des pharmacies
- 📦 Suivi des commandes

### Pour les Pharmacies
- 📊 Solution POS complète et moderne
- 📦 Gestion des stocks
- 💼 Traitement des ventes
- 📈 Analyses et rapports
- 🌐 Intégration au réseau 5BMed

## 🛠️ Technologies

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

### Prérequis
- Node.js 18+ et npm (ou bun)

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone <repository-url>
cd 5bmed

# 2. Installer les dépendances
npm install
# ou
bun install

# 3. Lancer le serveur de développement
npm run dev
# ou
bun run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🚀 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run build:dev` - Construit en mode développement
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI réutilisables (shadcn/ui)
│   ├── Header.tsx       # En-tête avec navigation
│   ├── Footer.tsx       # Pied de page
│   ├── HeroSection.tsx  # Section héro
│   └── ...
├── pages/              # Pages de l'application
│   ├── Index.tsx       # Page d'accueil
│   └── NotFound.tsx     # Page 404
├── lib/                # Utilitaires et configurations
│   ├── translations.ts # Traductions FR/HT
│   └── utils.ts         # Fonctions utilitaires
└── assets/             # Images et ressources statiques
```

## 🌍 Internationalisation

L'application supporte deux langues :
- **Français (FR)** - Langue par défaut
- **Créole Haïtien (HT)** - Langue secondaire

Les traductions sont gérées dans `src/lib/translations.ts`.

## 🎨 Design System

Le projet utilise un design system cohérent avec :
- **Couleur primaire**: Bleu (#2994ff)
- **Couleur secondaire**: Vert (#1ee699)
- **Typographie**: Inter
- **Espacements**: Système cohérent basé sur Tailwind

## 📝 Contribution

1. Créer une branche pour votre fonctionnalité
2. Faire vos modifications
3. Tester localement
4. Créer une pull request

## 📄 Licence

© 2025 5BMed. Tous droits réservés.

## 📧 Contact

- **Email**: info@5bmed.ht
- **Téléphone**: +509 1234-5678
- **Adresse**: Port-au-Prince, Haïti

---

**Développé pour améliorer l'accès aux soins de santé en Haïti**
