import React, { useState } from 'react';
import styled from 'styled-components';
import {Row, Col, CardContent, Cell, Card, TextBoxBiggerTitle, TextBoxSubTitle, TextBoxBigTitle, TextBox  } from '@sberdevices/plasma-ui';

export const CheckPhonePage = ({phone}: any) => {
    return (
        <Row>
            <Col type="calc" sizeXL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px"}}>
                <Card style={{ width: "100%" }}>
                    <CardContent compact>
                        <Cell
                            content={<TextBox><TextBoxBiggerTitle>Информация</TextBoxBiggerTitle><TextBoxSubTitle>{phone.full_num}</TextBoxSubTitle></TextBox>}
                        /><br />
                        <Cell
                            content={<TextBox><TextBoxBigTitle>Оператор связи</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        <Cell
                            content={<TextBox><TextBoxBigTitle>Город абонента</TextBoxBigTitle><TextBoxSubTitle>{phone.region}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}

export default CheckPhonePage;