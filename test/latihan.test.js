import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });  
    test('seharusnya upgrade', () => {
        render(<Counter />);
        const resetValue = screen.getByTestId('counter-value');
        const reset = screen.getByText('Reset');
        fireEvent.click(reset);
        expect(resetValue).toHaveTextContent('0');
    });                   
});
describe('Greeting Component', () => {
    test('nama saya akan disebutkan', () => {
        render(<Greeting name="haikall" />);
        const menyapa = screen.getByTestId('greeting');
        expect(menyapa).toHaveTextContent('Hello, haikall');
    });
    test('nama asprak', () => {
        render(<Greeting name="mas ucill" />);
        const menyapa = screen.getByTestId('greeting');
        expect(menyapa).toHaveTextContent('Hello, mas ucill');
    });                   
}); 
describe('AlertButton Component', () => {
    it('Menampilkan alert saat tombol diklik', () => {
        const mockAlert = jest.spyOn(global, 'alert').mockImplementation(() => {});
        render(<AlertButton message="Ini ujian hidup, tenang saja!" />);
        const button = screen.getByTestId('alert-button');
        fireEvent.click(button);
        expect(mockAlert).toHaveBeenCalledWith("Ini ujian hidup, tenang saja!");
        
    });
});
