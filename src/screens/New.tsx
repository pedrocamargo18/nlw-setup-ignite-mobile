import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/Checkbox";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";


const availableWeekDays = ['Domingo', 'Segunda-feira' , 'Terça-feira' , 'Quarta-feira', 'Quinta-feira' , 'Sexta-feira' , 'Sábado']

export function New(){
    const [weekDays, setWeekDays] = useState <number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex ));

        }else{
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom : 100}}>
                <BackButton />
                <Text className="text-white mt-6 font-extrabold text-3xl">
                    Criar Habito
                </Text>
                <Text className="text-white mt-6 font-semibold text-base">
                    Qual o seu comprometimento?
                </Text>
                <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus: border-green-600" placeholder="Ex.: Dormir bem" placeholderTextColor={colors.zinc[400]} />
                <Text className="font-semibold mt-4 mb-3 text-white text-base"> Qual a Recorrência?</Text>
                {
                    availableWeekDays.map((weekDay, i) => (

                        <CheckBox key={weekDay} title={weekDay}
                        checked={weekDays.includes(i) }
                        onPress={() => handleToggleWeekDay(i)}/>
                    ))
                }
                <TouchableOpacity className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"  activeOpacity={0.7}>
                    <Feather name="check" size={20} color={colors.white} />
                    <Text className="font-semibold text-base text-white ml-2">
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}