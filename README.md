# 💈 The Gentleman — Barbershop Website

Un site vitrine complet et professionnel pour un barbershop — construit en HTML, CSS et JavaScript pur. Design clair, moderne et élégant avec une touche dorée.
Développé en synergie avec l'IA pour maximiser la vitesse de production det la qualité du code. 
---

## Aperçu

- Landing page complète avec 6 sections
- Navigation fixe avec effet au scroll et lien actif
- Section services avec grille et badge "Populaire"
- Section à propos avec citation et valeurs
- Galerie de réalisations en CSS Grid
- Formulaire de réservation avec confirmation dynamique
- Animations au scroll avec IntersectionObserver
- Entièrement responsive mobile

---

## Stack technique

- **HTML** — structure sémantique propre
- **CSS** — variables, Grid, animations, responsive
- **JavaScript** — vanilla, aucun framework
- **Fonts** — Google Fonts (Playfair Display + Open Sans)
Avec Collaboration IA pour l'optimisation
---

## Structure du projet

```
barbershop/
├── index.html    ← Structure HTML
├── style.css     ← Styles et animations
└── script.js     ← Logique et interactions
```

---

## Sections du site

| Section | Description |
|---------|-------------|
| **Loader** | Page de chargement présentant le site |
| **Hero** | Accroche, stats clés et appel à l'action |
| **Services** | 6 prestations avec prix et icônes |
| **À propos** | Histoire du barbier et valeurs |
| **Galerie** | Réalisations en CSS Grid |
| **Réservation** | Formulaire avec confirmation |
| **Footer** | Adresse, horaires et liens |

---

## Fonctionnalités détaillées

### 🧭 Navigation intelligente
La nav change d'apparence au scroll avec `classList`. Le lien actif se met en évidence selon la section visible grâce à `IntersectionObserver` et `offsetTop`.

### 👁️ Scroll Reveal
Chaque carte et section s'anime à l'entrée dans le viewport via l'`IntersectionObserver` natif — sans librairie externe.

### 📅 Formulaire de réservation
Validation complète des champs en JavaScript pur. La date est formatée en français avec `toLocaleDateString`. Confirmation personnalisée affichée après soumission.

### 📱 Responsive
Breakpoint à 768px — la grille services passe en colonne, la nav se simplifie, toutes les sections s'adaptent au mobile.

---

## Lancer le projet

Aucune dépendance, aucune installation requise.

**Option 1 — Live Server (recommandé)**
- Installe l'extension Live Server dans VS Code
- Clic droit sur `index.html` → "Open with Live Server"

**Option 2 — Déploiement direct**
```bash
# Clone le projet
git clone https://github.com/TON_USERNAME/barbershop.git

# Ouvre index.html avec Live Server ou déploie sur Vercel
```

---

## Déploiement (Vercel)

Ce projet étant en HTML pur — Vercel est parfait et gratuit :

1. Connecte-toi sur [vercel.com](https://vercel.com) avec ton compte GitHub
2. Clique sur **"New Project"** → glisse le dossier `barbershop`
3. Vercel détecte automatiquement le projet statique 🚀
4. Lien public en 30 secondes

---

## Mettre le projet sur GitHub

```bash
cd barbershop
git init
git add .
git commit -m "Initial commit — The Gentleman Barbershop"
git remote add origin https://github.com/TON_USERNAME/barbershop.git
git branch -M main
git push -u origin main
```

Remplace `TON_USERNAME` par ton pseudo GitHub. ✅

---

## Personnalisation pour un vrai client

Pour adapter ce site à un vrai barbershop :

- Remplacer les placeholders de la galerie par de vraies photos
- Mettre le vrai nom, adresse et numéro de téléphone
- Connecter le formulaire à un service email (Formspree, EmailJS)
- Ajouter Google Maps pour la localisation
- Intégrer un vrai système de réservation (Calendly, SimplyBook)

---

## Choix techniques

**Pourquoi pas React ?**
Pour un site vitrine statique, HTML/CSS/JS pur est plus rapide à charger, plus simple à déployer et suffisant. Le bon outil pour le bon besoin.

**Pourquoi Playfair Display + Open Sans ?**
Playfair Display apporte l'élégance et le caractère pour les titres. Open Sans assure une lisibilité optimale pour le corps de texte. Le contraste serif/sans-serif est une technique classique du design éditorial.

---

## Auteur

**Christophe** — Développeur Fullstack
Stack : HTML · CSS · JavaScript · Node.js · Python · SQL · Linux

---

> Projet réalisé dans le cadre de mon portfolio freelance — orienté sites vitrines professionnels.
