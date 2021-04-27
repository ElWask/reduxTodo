# Tutoriel Redux

![React](<https://i.imgur.com/As15QGv.jpg>)

## Qu'est ce que Redux?

> Redux est une bibliothèque open-source JavaScript de gestion d'état pour applications web. Elle est plus couramment utilisée avec des frameworks comme React ou Angular pour la construction d'interfaces utilisateur.

Redux. (2020, janvier 14). Wikipédia, l'encyclopédie libre.

C'est une librairie de code JavaScript développée par Facebook qui facilite la gestion de l'état des applications JavaScript en implémentant un "conteneur d'état".

## Pourquoi utiliser Redux?

A mesure que les applications web et mobiles deviennent plus complexes, il devient difficile à gérer les points suivants:
- Quel composant gère quel état ?
- Quels composants partagent quels états ?
- Comment partager un état entre deux composants « direct » ?
- Comment partager un état entre deux composants « éloignés »
- Comment corriger des erreurs lorsqu’un état peut être mis à jour par un ensemble de composants « éloignés » ?

Redux y apporte une solution simple, efficace, transparente et scalable

## Les principes de base

### 1 Store, L'état global de l'application est stocké dans un objet

L'état entier de l'application est stocké dans une unique structure d'object JavaScript, un arbre d'état contenu dans le ***store***.

Par exemple, pour le cas d'une application de Todo liste, l'état global de l'application pourrait être stockée ainsi :

```javascript
{
    todos: []
}
```

### 2 Actions,  L'état de l'application est en mode lecture seule et ne peut pas être modifié directement

Le seul moyen de mettre à jour l'état de l'application est d'émettre une ***action***. Une action est un objet qui décrit un évènement qui affecte l'état de l'application.

Un exemple d'action qui contiendrait les informations nécessaire pour muter l'état global de l'application:

```javascript
{
    type: 'ADD_TODO',
    text: 'Learn Redux'
}
```

### 3 Reducers, Les mises à jour de l'état sont réalisées par des fonctions pures, appelées ***reducers***

Celles-ci prennent en paramètre l'état initial avant la mise à jour d'état ainsi qu'une action. Selon les évènements décrits par l'action, l'état global de l'application est mise à jour.

Un reducer est une fonction pure car elle ne prend pas en compte de variables externes ou globales, mais seulement les paramètres qui lui sont passés. Le reducer retourne toujours une nouvelle instance de l'état modifié.

```javascript
myReducer = (state, action) => {
    // ...
    return state
}
```

### 4 Provider
Le composant <Provider> va donner acces au Store de Redux au composant imbriqué a l'intérieur.
```javascript
const App = () => (
  <Provider store={store}>
    <VisibleTodoList />
    <VisibleDiffTodoList />
    <AddTodo />
  </Provider>
);
```
### 5 Connect
La fonction Connect() va connecter le composant React au Store de Redux
```javascript
export default connect(mapStateToProps)(TodoList);
```

### 6 MapStateToPros et MapDispatchToPros

Ainsi Redux rend explicite le fait que chaque action déclenche une fonction reducer qui déclenche à sont tour un appel vers le store qui stocke l'état de l'application.

![Action, reducer, store](<https://i.imgur.com/XN0SVfM.png>)

## Utilisation

Imaginons une application de Todo Liste très simple qui permet d'ajouter des tâches et de les cocher quand elles sont terminées. L'affichage des tâches peut être filtrée par leur statut de visibilité.



![Todo list](<https://i.imgur.com/SeqivcX.png>)

L'état entier de l'applicaton pourrait être stockée dans un objet de ce type:

```javascript
{
    todos: []
}
```

### Actions

Commençons par définir des actions qui pourraient modifier l'état d'une telle application. Les actions représentent les opérations que l'utilisateur peut faire qui modifient l'état de l'application.

Nous pouvons définir les actions qui permettent d'ajouter ou cocher un todo, ou de filtrer les todos affichés.

***`actions/index.js`***

 ```javascript
// simulation d'une séquence d'identifiants uniques
let nextTodoId = 0

// ajouter un todo
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// cocher un todo
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
 ```

### Reducers

Ces actions devront être consommées par des fonctions reducer afin de modifier l'état global.

Dans ***`reducers/index.js`***, nous pouvons définir les fonctions qui transformeront l'état de l'application pour ajouter ou cocher des todos ou modifier le filtre d'affichage. C'est ici que nous faisons un mapping des actions de l'utilisateur sur des traitements cohérents de l'état de l'application.

Redux ne dit pas comment structurer les fonctions reducer d'une application. Ici, les deux reducers sont combinés à l'aide de la fonction `combineReducers`.

***`reducers/index.js`***

```javascript
import {combineReducers} from 'redux'

// combinaison de deux reducers
export default combineReducers({
    
    // reducer: actions todo
    todos: (state = [], action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            case 'TOGGLE_TODO':
                return state.map(todo =>
                    todo.id === action.id ? {...todo, completed: !todo.completed} : todo
                )
            default:
                return state
        }
    }
})

```

Il est important de noter que chaque reducer est une fonction pure qui ne prend en compte que ses paramètres (pas de variable locales ou globales). Elles retournent toujours une nouvelle instance de l'objet `state`.

Nous avons donc mis en place les actions et les reducers, et il ne manque plus qu'à implémenter les composants de présentation et les containers.

## Conclusion

Dans cette petite implémentation de la gestion d'état dans React avec Redux, nous avons séparé la logique en différents objets avec différentes responsabilités:

* les ***actions***, les objets qui décrivent les évènements qui doivent modifier l'état de l'application,
* les ***reducers***, les fonctions qui transforment l'état de l'application,
* les composants React qui composent l'interface et permettent d'activer les actions via les composants containers.

Dans le paradigme Redux, la gestion d'état est simplifiée en puisque tous les composants se basent sur un même état commun global. Toute
 modification de l'état est forcément traçable vers une action avec un certain type et des paramètres. Ceci permet d'augmenter la maintenabilité et
  les possiblités de débuggage pas à pas.

## Installation du projet TODO
Vérifier que vous ayez bien installé React-Native, Expo et Node Js
Depuis votre terminal:
```
git clone https://github.com/ElWask/reduxTodo.git
npm install
npm start
```

## Références

Merci à Jack d'avoir commencé ce tutoriel: <https://github.com/jckbrkr/redux-tutorial>

La documentation de Redux: https://redux.js.org/

Exemple Todo List: https://redux.js.org/basics/example

Wikipédia: https://fr.wikipedia.org/wiki/Redux

