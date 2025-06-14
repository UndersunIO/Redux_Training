## Redux training

### Description

Projet d'expérimentation TodoApp avec Redux ToolKit.

Inspiration Design : Itcrowd.

### Config

Vite, Typescript (100%Strict), React, React-Redux, Redux Toolkit, jest, eslint, prettier

### Récupération et installation du projet

```bash
git clone https://github.com/UndersunIO/Redux_Training
cd ReduxTraining
yarn install
```

### Démarrage

```bash
yarn dev
```

### Test

```bash
yarn test
```

### Build

```bash
yarn build
```

https://rtk-training.vercel.app/

Domain: Contient la logique métier.
Sur ce projet de TodoApp, notre modèle Todo et nos actions version RTK todoSlice.ts.

Application: Contient la logique d'app.
Nous allons y placer notre store Redux.

UI : Contient l'affichage de l'interface utilisateur.
Nous y mettrons nos composants React.

Infrastructure: Contient la logique de persistance des données. (ici localStorage)
