import { CustomProvider, DateRangePicker } from 'rsuite';
import svSE from 'rsuite/locales/sv_SE';
import 'rsuite/DateRangePicker/styles/index.css';

const { beforeToday } = DateRangePicker;

function DateComponent() {
  return (
    <CustomProvider locale={svSE}>
      <DateRangePicker
        format='MM/dd/yyyy'
        size='md'
        block
        placeholder='Välj datum'
        showOneCalendar
        shouldDisableDate={beforeToday()}
        ranges={[]}
        style={{ border: 'inherit' }}
        showHeader={false}
        className='dateRangePicker'
        required
      />
    </CustomProvider>
  );
}

export default DateComponent;
