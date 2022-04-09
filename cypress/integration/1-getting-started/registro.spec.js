describe('Teste do Registro.br',() => {

    it('Deveria ser possível consultar um domínio válido que esteja disponível',
    () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('batatinha123.com.br')
        cy.get('button').click()
        cy.get('.is-avail-response-available').should('be.visible')
    })

    it('Deveria ser possível consultar um domínio válido, sem informar a extensão', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('batatinha123')
        cy.get('button').click()
        cy.get('.is-avail-response-available').should('be.visible')

    })
    it('Deveria ser possível consultar um domínio válido mas não disponivel', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('youtube')
        cy.get('button').click()
        cy.get('.is-avail-response-not-available').should('be.visible')

    })
    it('Não preencher o botão de pesquisa', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
        
    })
    it('Consulta com caracteres inválidos', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('@@@')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    it('Consulta com o número mínimo de caracteres', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('a')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    it('Consulta com número máximo de caracteres', () => {
        const baseUrl = 'https://registro.br/busca-dominio'

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('jhdafjuhesfuhgsuhsguhhgiaoiaiojijsrfdgsligjsoigfsj')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    
})