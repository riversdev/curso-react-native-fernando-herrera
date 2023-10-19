import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/AppTheme'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
    const {
        prevNumber,
        number,

        clear,
        convertPositiveNegative,
        buildNumber,
        removeLastChar,

        add,
        substract,
        multiply,
        divide,

        calculate,
    } = useCalculator()

    return (
        <View style={styles.container}>
            {(prevNumber !== '0') && (<Text style={styles.smallResult}>{prevNumber}</Text>)}
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalc title="C" color='#9B9B9B' onPress={clear} />
                <ButtonCalc title="+/-" color='#9B9B9B' onPress={convertPositiveNegative} />
                <ButtonCalc title="del" color='#9B9B9B' onPress={removeLastChar} />
                <ButtonCalc title="/" color='#FF9427' onPress={divide} />
            </View>
            <View style={styles.row}>
                <ButtonCalc title="7" onPress={() => buildNumber('7')} />
                <ButtonCalc title="8" onPress={() => buildNumber('8')} />
                <ButtonCalc title="9" onPress={() => buildNumber('9')} />
                <ButtonCalc title="X" color='#FF9427' onPress={multiply} />
            </View>
            <View style={styles.row}>
                <ButtonCalc title="4" onPress={() => buildNumber('4')} />
                <ButtonCalc title="5" onPress={() => buildNumber('5')} />
                <ButtonCalc title="6" onPress={() => buildNumber('6')} />
                <ButtonCalc title="-" color='#FF9427' onPress={substract} />
            </View>
            <View style={styles.row}>
                <ButtonCalc title="1" onPress={() => buildNumber('1')} />
                <ButtonCalc title="2" onPress={() => buildNumber('2')} />
                <ButtonCalc title="3" onPress={() => buildNumber('3')} />
                <ButtonCalc title="+" color='#FF9427' onPress={add} />
            </View>
            <View style={styles.row}>
                <ButtonCalc title="0" size={2} onPress={() => buildNumber('0')} />
                <ButtonCalc title="." onPress={() => buildNumber('.')} />
                <ButtonCalc title="=" color='#FF9427' onPress={calculate} />
            </View>
        </View>
    )
}