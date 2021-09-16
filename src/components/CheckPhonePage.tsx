import React, { useState } from 'react';
import styled from 'styled-components';
import {Row, Col, CardContent, Cell, Card, TextBoxBiggerTitle, TextBoxSubTitle, TextBoxBigTitle, TextBox  } from '@sberdevices/plasma-ui';
import { IconNetwork, IconLocation, IconEye } from '@sberdevices/plasma-icons';

export const CheckPhonePage = ({phone, countViews}: any) => {
    return (
        <Row>
            <Col type="calc" sizeXL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px"}}>
                <Card style={{ width: "100%", margin: "0 auto" }}>
                    <CardContent compact>
                        <Cell
                            content={<TextBox><TextBoxBiggerTitle>Информация о номере</TextBoxBiggerTitle><TextBoxSubTitle>{phone.full_num}</TextBoxSubTitle></TextBox>}
                        /><br />
                        <Cell
                            contentLeft={<IconNetwork size="s" color="inherit" />   }
                            content={<TextBox><TextBoxBigTitle>Оператор связи</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        <Cell
                            contentLeft={<IconLocation size="s" color="inherit" />   }
                            content={<TextBox><TextBoxBigTitle>Город абонента</TextBoxBigTitle><TextBoxSubTitle>{phone.region}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        {(phone.old_operator ? (<Cell
                            contentLeft={<IconNetwork size="s" color="inherit" />   }
                            content={<TextBox><TextBoxBigTitle>Старый оператор</TextBoxBigTitle><TextBoxSubTitle>{phone.old_operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />) : null)}
                        <br /><Cell
                            contentLeft={<IconEye size="s" color="inherit" />  }
                            content={<TextBox><TextBoxBigTitle>Количество просмотров</TextBoxBigTitle><TextBoxSubTitle>{countViews}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}

export default CheckPhonePage;