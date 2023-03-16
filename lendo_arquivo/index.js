const text = `
P051998000000000000004324       202209150000000000053760350361AGUA      SERVICO AUTONOMO DE AGUA                                                      
P0045823450546                  202209050000000000135260350361AGUA      COMPANHIA AGUAS DE JOINVI                                                     
P04436106191765                 202209050000000000087340350361AGUA      COMPANHIA ESTADUAL DE AGU                                                     
P04436109381467                 202209050000000001723530350361AGUA      COMPANHIA ESTADUAL DE AGU                                                     `;

const lines = text.split(/\r?\n|\r|\n/g);

const getPosition = (p1, p2, text) => text.substring(p1, p2);

const body = lines.map((line) => {
  return {
    column_1: getPosition(0, 1, line),
    column_2: getPosition(1, 7, line),
    column_3: getPosition(7, 32, line),
    column_4: getPosition(32, 40, line),
    column_5: getPosition(40, 55, line),
    column_6: getPosition(55, 57, line),
    column_7: getPosition(57, 59, line),
    column_8: getPosition(59, 62, line),
    column_9: getPosition(62, 72, line),
    column_10: getPosition(72, 97, line),
  };
});

console.log(body);
