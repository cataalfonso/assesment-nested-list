
describe('Sygris assesment', () => {
	before(() => {
		cy.visit('http://localhost:3000');
		cy.intercept('POST', 'http://20.76.179.252/api/v1/auth/login', {
			statusCode: 200,
			body: {
				"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhdGEuYWxmb25zb0BnbWFpbC5jb20iLCJpZCI6MiwiaWF0IjoxNjU5OTkxNDMxLCJleHAiOjE2NTk5OTUwMzF9.e7dK4H6NQwEqLSBtqRilqSJxjz_b-R6SnjV7venRSHM"
			  }
		});
		cy.intercept('GET', 'http://20.76.179.252/api/v1/node/', {
			statusCode: 200,
			body: [
				{"id":1,
			"name":"node1",
			"parentId":0},
			
			{"id":2,
			"name":"node2",
			"parentId":0},
			
			
			{"id":3,
			"name":"node1.1",
			"parentId":1},
			
			
			{"id":4,
			"name":"node2.1",
			"parentId":2},
			
			{"id":5,
			"name":"node1.2",
			"parentId":1},
			
			
			{"id":6,
			"name":"node2.2",
			"parentId":2},
			
			{"id":7,
			"name":"node2.2.1",
			"parentId":6},
			
			
			{"id":8,
			"name":"node 2.2.2",
			"parentId":6},
			
			{"id":9,
			"name":"node 3",
			"parentId":0}
			
			]
		});

		cy.get('input[name="txtEmail"').type("cata.alfonso@gmail.com");
		cy.get('input[name="txtPassword"').type("p4ssw0rd");
		cy.get('#btnSend').click();
	})
	it('shows all elements, nested', () => {
		cy.get('li#1').siblings().should('have.length', 2);
		cy.get('li#1').children().should('have.length', 2);
		cy.get('li#2').children().should('have.length', 2);
		cy.get('li#6').children().should('have.length', 2);
		cy.get('li#7').siblings().should('have.length', 1);
	});

	it('expand', () => {
		cy.get('#btnToogle-1').click();
		cy.get('li#3').should('not.exist');
		cy.get('li#5').should('not.exist');
		cy.get('#btnToogle-1').click();
		cy.get('li#3').should('be.visible');;
		cy.get('li#5').should('be.visible');
	});
	
});

