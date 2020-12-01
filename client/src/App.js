import {Checkbox, FormControlLabel, MenuItem, Select, Radio, RadioGroup} from "@material-ui/core";
import './App.css';



function App() {

    const handler = async (e)=>{
        const value = e.target.value
        let res = await fetch('/api/click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value})
        })
        res = await res.json()
        console.log(res)
    }

    return (
        <div className='wrapper'>
            <div className='body'>
                <div className='header cooler'>Вентелятор</div>
                <div className='blocks'>
                    <div className='selector power'>
                        <div className='label'><span>Мощность</span></div>
                        <div className='group'>
                            <Select onChange={handler}>
                                <MenuItem value='1.5KWT' defaultValue>1.5кВт</MenuItem>
                                <MenuItem value='2KWT'>2кВт</MenuItem>
                                <MenuItem value='2.5KWT'>2.5кВт</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className='selector control'>
                        <div className='label'><span>Управление</span></div>
                        <div className='group'>
                            <RadioGroup onChange={handler}>
                                <FormControlLabel value="PRAIMOI-PUSK" control={<Radio/>} label='Прямой пуск'/>
                                <FormControlLabel value="PREOBRAZOVATEL" control={<Radio/>} label='Преобразователь частоты'/>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className='header general'>Общие</div>
                <div className='blocks'>
                    <div className='selector case'>
                        <div className='label'><span>Корпус</span></div>
                        <div className='group'>
                            <RadioGroup onChange={handler}>
                                <FormControlLabel value="PLASTIK" control={<Radio/>} label='Пластик'/>
                                <FormControlLabel value="METALL" control={<Radio/>} label="Металл"/>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='selector options'>
                        <div className='label'><span>Доп. опции</span></div>
                        <div className='group'>
                            <FormControlLabel control={<Checkbox value="FAIR-SIGNAL"/>} label="Cигналный пожар"  onChange={handler}/>
                            <FormControlLabel control={<Checkbox value="LED-INDICATION"/>} label="LED индекация"  onChange={handler}/>
                            <FormControlLabel control={<Checkbox value="DISPATCHER"/>} label="Диспетческая"  onChange={handler}/>
                            <FormControlLabel disabled control={<Checkbox name="NOT-WORK"/>}
                                              label="Не доступная опция"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
