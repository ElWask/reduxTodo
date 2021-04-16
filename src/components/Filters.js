import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { VisibilityFilters, setVisibilityFilter } from '../actions'
import { connect } from 'react-redux'

/* Fonction permettant d'extraire des données du store et de le comparer avec un état de nos props
** Premier argument, state, renvoie les états du store (visilibityFilter et la todoList)
** Second argument, ownProps, va récuperer les props du container. Ici le filter passé en paramettre du props
** cette fonction va retourner un nouveau props: active
*/
const mapStateToProps = ({visibilityFilter}) => {
    return {
        active: visibilityFilter
    }
}
/* Fonction permettant d'envoyer des actions le store
** dispatch est le seul argument permettant de modifier une variable dans le store
*/
const mapDispatchToProps = dispatch => ({
    showAll: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)),
    showActive: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)),
    showCompleted: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  });

const Filters = ({active, showAll, showActive, showCompleted}) => (
    <View style={styles.content}>
        <Text>Filter: </Text>
        <View style={styles.btnContainer}>
            <Button
                onPress={showAll}
                disabled={active===VisibilityFilters.SHOW_ALL}
                title="All"
            />
            <Button
                onPress={showActive}
                disabled={active===VisibilityFilters.SHOW_ACTIVE}
                title="Active"
            />
            <Button
                onPress={showCompleted}
                disabled={active===VisibilityFilters.SHOW_COMPLETED}
                title="Completed"
            />   
        </View>
    </View>
)

/* Le connect va nous permettre de lier mapStateToProps et mapDispatchToProps au store sur Filter */
export default connect(mapStateToProps, mapDispatchToProps)(Filters)

const styles = StyleSheet.create({
    content:{
        margin:20,
        marginTop:50
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
})
