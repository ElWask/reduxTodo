import React from 'react'
import { Button } from 'react-native'

/* action embarquer par le connect dans FilterContainer 
** active et onClick viennent du container et children vient de se qui était entre les balises du composant FilterComponent
*/

const Filter = ({ active, onClick, children }) => (
    <Button
        onPress={onClick}
        disabled={active}
        title={children}
    />
)
export default Filter
