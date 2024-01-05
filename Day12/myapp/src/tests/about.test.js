import {screen ,render} from '@testing-library/react'
import About from '../pages/About'; 
test('About_test_1' ,()=>{
    render(<About/>);
    const data1 = screen.getByText(/Susmitha/i);
    expect(data1).toBeInTheDocument();
 })