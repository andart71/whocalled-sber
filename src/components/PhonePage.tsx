import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Row, Col, TextField, Button} from '@sberdevices/plasma-ui';
import { isSberBox } from '@sberdevices/plasma-ui/utils';
import { sendData } from '../assistant';
import { IconCallCircle } from '@sberdevices/plasma-icons';

const StyledTextField = styled(TextField)`
    max-width: 100%;
    display: block;
    margin: 0 auto;
    float: none;
`;
const StyledButton = styled(Button)`
    max-width: 100%;
    display: block;
    margin: 0 auto;
    float: none;
`;

export const PhonePage = ({currentState}: any) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [setPhone, setInputPhone] = useState<any>('');
    const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && formRef.current) {
            const formElements = Array.from(formRef.current.elements) as HTMLElement[];
            const index = Array.from(formElements).indexOf(event.target as HTMLElement);
            if (index > -1) {
                setTimeout(() => {
                    formElements[index + 1].focus();
                }, 150);
            }
        }
    }, []);
    useEffect(() => {
        if (currentState == "check") {
            sendData({action: {action_id: 'SEND_PHONE', parameters: {phone: setPhone.phone}}});
        }
    });
    const handleSubmit = () => {
        sendData({action: {action_id: 'SEND_PHONE', parameters: {phone: setPhone.phone}}});
    }
    const handleChange = (t: any) => {
        setInputPhone({phone: t.target.value})
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <Row>
            <Col type="calc" sizeXL={4} sizeM={6} style={{margin: "0 auto", marginTop: "15px"}}>
                Номер телефона
            </Col>
            </Row>
            <Row>
                <Col type="calc" sizeXL={4} sizeM={6} style={{margin: "0 auto", marginTop: "15px"}}>
                    <StyledTextField
                        label="+79000000000"
                        value={setPhone.phone ? setPhone.phone : "+7"}
                        onChange={handleChange}
                        name="phone"
                        onKeyDown={onKeyDown}
                        pattern="((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}"
                        contentLeft={<IconCallCircle size="s" color="inherit" />}
                    />
                </Col>
            </Row>
            <Row>
                <Col type="calc" sizeXL={4} sizeM={6} style={{margin: "0 auto", marginTop: "15px"}}>
                    <StyledButton type="submit" size={isSberBox() ? 'm' : 's'} view="primary">
                        Проверить
                    </StyledButton>
                </Col>
            </Row>
        </form>

    )
}

export default PhonePage;