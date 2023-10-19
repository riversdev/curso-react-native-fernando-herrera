import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { CustomSwitch, HeaderTitle } from '../components'
import { appTheme } from '../theme/appTheme'
import { useForm } from '../hooks'

const initialForm = { name: '', email: '', phone: '', isActive: false }

export const TextInputScreen = () => {
    const { formdata, handleChange } = useForm(initialForm)

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={appTheme.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <HeaderTitle title="Text Inputs" />
                        <TextInput
                            style={styles.input}
                            placeholder='Ingrese su nombre'
                            value={formdata.name}
                            onChangeText={value => handleChange(value, 'name')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Ingrese su email'
                            keyboardType='email-address'
                            value={formdata.email}
                            onChangeText={value => handleChange(value, 'email')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Ingrese su phone'
                            keyboardType='phone-pad'
                            value={formdata.phone}
                            onChangeText={value => handleChange(value, 'phone')}
                        />
                        <CustomSwitch
                            title="Is Active"
                            isOn={formdata.isActive}
                            onChange={value => handleChange(value, 'isActive')}
                        />

                        <HeaderTitle title={JSON.stringify(formdata, null, 4)} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

// export const TextInputScreen = () => {
//     const [formdata, setFormdata] = useState<Form>({ name: '', email: '', phone: '' })

//     const handleChange = (value: string, field: keyof Form) => {
//         setFormdata({
//             ...formdata,
//             [field]: value
//         })
//     }

//     return (
//         <ScrollView>
//             <KeyboardAvoidingView
//                 // behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // no funciona la pendejada esta
//                 style={appTheme.container}
//             >
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                     <View style={{ flex: 1 }}>
//                         <HeaderTitle title="Text Inputs" />
//                         <TextInput
//                             style={styles.input}
//                             placeholder='Ingrese su nombre'
//                             value={formdata.name}
//                             onChangeText={value => handleChange(value, 'name')}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder='Ingrese su email'
//                             keyboardType='email-address'
//                             value={formdata.email}
//                             onChangeText={value => handleChange(value, 'email')}
//                         />

//                         <HeaderTitle title={JSON.stringify(formdata, null, 4)} />
//                         <HeaderTitle title={JSON.stringify(formdata, null, 4)} />
//                         <HeaderTitle title={JSON.stringify(formdata, null, 4)} />

//                         <TextInput
//                             style={styles.input}
//                             placeholder='Ingrese su phone'
//                             keyboardType='phone-pad'
//                             value={formdata.phone}
//                             onChangeText={value => handleChange(value, 'phone')}
//                         />
//                     </View>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//         </ScrollView>
//     )
// }

const styles = StyleSheet.create({
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 20,
    },
})