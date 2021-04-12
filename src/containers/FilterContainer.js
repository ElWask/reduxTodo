import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../components/Filter'

/* Fonction permettant d'extraire des données du store et de le comparer avec un état de nos props
** Premier argument, state, renvoie les états du store (visilibityFilter et la todoList)
** Second argument, ownProps, va récuperer les props du container. Ici le filter passé en paramettre du props
** cette fonction va retourner un nouveau props: active
*/
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

/* Fonction permettant d'envoyer des actions le store
** dispatch est le seul argument permettant de modifier une variable dans le store
*/
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

/* Le connect va nous permettre de lier mapStateToProps et mapDispatchToProps au store sur Filter */
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer
