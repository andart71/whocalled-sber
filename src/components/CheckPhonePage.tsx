import React, { useState } from 'react';
import {
    Row,
    Col,
    CardContent,
    Cell,
    Card,
    TextBoxBiggerTitle,
    TextBoxSubTitle,
    TextBoxBigTitle,
    TextBox,
    CellIcon
} from '@sberdevices/plasma-ui';
import { IconNetwork, IconLocation, IconEye, IconDone, IconClose } from '@sberdevices/plasma-icons';
import axios from 'axios';

export const CheckPhonePage = ({phone, countViews, userId, countLike,  countDislike}: any) => {
    const [setLike, checkLike] = useState(0)
    const [getCountLike, setCountLike] = useState<number>(countLike);
    const [getCountDislike, setCountDislike] = useState<number>(countDislike);
    return (
        <Row>
            <Col type="calc" sizeXL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px", width: "100%"}}>
                <Card style={{ width: "100%", margin: "0 auto" }}>
                    <CardContent compact>
                        <Cell
                            content={<TextBox><TextBoxBiggerTitle>Информация о номере</TextBoxBiggerTitle><TextBoxSubTitle>{phone.full_num}</TextBoxSubTitle></TextBox>}
                        /><br />
                        <Cell
                            contentLeft={<CellIcon><IconNetwork size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Оператор связи</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        <Cell
                            contentLeft={<CellIcon><IconLocation size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Город абонента</TextBoxBigTitle><TextBoxSubTitle>{phone.region}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        {(phone.old_operator ? (
                        <Cell
                            contentLeft={<CellIcon><IconNetwork size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Старый оператор</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />) : null )}
                        <Cell
                        contentLeft={<CellIcon><IconEye size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Количество просмотров</TextBoxBigTitle><TextBoxSubTitle>{countViews}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                        <Cell
                            contentLeft={<CellIcon><IconDone size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Положительных оценок</TextBoxBigTitle><TextBoxSubTitle>{getCountLike}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                        <Cell
                            contentLeft={<CellIcon><IconClose size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Отрицательных оценок</TextBoxBigTitle><TextBoxSubTitle>{getCountDislike}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                    </CardContent>
                </Card><br /><br /><br /><br /><br />
            </Col>
        </Row>
    );
}

export default CheckPhonePage;