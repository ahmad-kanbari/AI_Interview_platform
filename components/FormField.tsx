import React from 'react'
import { Controller , FieldValues, Path, Control} from 'react-hook-form'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'


interface FormFieldProps< T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    label: string,
    placeholder?: string,
    type?: 'email' | 'text' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'file',

}

const FormField = <T extends FieldValues>({control , name, label, placeholder , type="text"} : FormFieldProps<T>) => {
  return (
     <Controller name={name} control={control} render={({ field }) => (

        <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input 
                className="input"
                placeholder={placeholder}
                type={type}
                {...field}
                />
            </FormControl>
            <FormMessage />
        </FormItem>
     )} 
    />
    
  )
}

export default FormField