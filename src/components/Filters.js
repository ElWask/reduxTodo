import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FilterContainer from '../containers/FilterContainer'
import { VisibilityFilters } from '../actions'

const Filters = () => (
    <View style={styles.content}>
        <Text>Show: </Text>
        <View style={styles.btnContainer}>
            <FilterContainer filter={VisibilityFilters.SHOW_ALL}>All</FilterContainer>
            <FilterContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterContainer>
            <FilterContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterContainer>    
        </View>
    </View>
)

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
export default Filters
